import { Server, Socket } from "socket.io";
import { generateName } from "./assistance/nameGenerator";

const SOC_EVENTS = {
    CONNECTION: "connection",
    DISCONNECT: "disconnect",
    MESSAGE: "message",
    GET_USER_ID: "get user id",
    YOUR_ID: "your id",
    YOUR_TEAM: "your team",
    TEAM_MEMBERS: "team members",
};

const redTeam: string[] = [];
const blueTeam: string[] = [];

const socket = (io: Server) => {
  io.on(SOC_EVENTS.CONNECTION, (socket: Socket) => {
    const name = generateName();
    let team: string;

    if (redTeam.length <= blueTeam.length) {
      redTeam.push(name);
      team = "red";
    } else {
      blueTeam.push(name);
      team = "blue";
    }

    console.log(`✅: user ${name} just connected and joined the ${team} team!`);

    // Emit team members to client
    const teamMembers = team === "red" ? redTeam : blueTeam;
    socket.emit(SOC_EVENTS.TEAM_MEMBERS, teamMembers);

    socket.emit(SOC_EVENTS.YOUR_ID, name);
    socket.emit(SOC_EVENTS.YOUR_TEAM, team);

    socket.on(SOC_EVENTS.DISCONNECT, () => {
      console.log(`❌: ${name} (${socket.id}) just disconnected from the ${team} team`);
      const index = team === "red" ? redTeam.indexOf(name) : blueTeam.indexOf(name);
      if (index !== -1) {
        team === "red" ? redTeam.splice(index, 1) : blueTeam.splice(index, 1);
        // Emit team members to remaining clients
        io.emit(SOC_EVENTS.TEAM_MEMBERS, team === "red" ? redTeam : blueTeam);
      }
    });
  });

};
export default socket;