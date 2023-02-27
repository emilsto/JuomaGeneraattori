import React, { useContext, useEffect, useState } from 'react';
import { io } from "socket.io-client";

import LoadingSpinner from '../../shared/components/loadingspinner/LoadingSpinner';
import Card from '../../shared/components/card/Card';

const socket = io("ws://localhost:1337");

import './LandingPage.css'



const LandingPage = () => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [teamMembers, setTeamMembers] = useState<string[]>([]);
  
    useEffect(() => {
      socket.on("connect", () => {
        console.log("Connected to server");
        socket.emit("your id", "");
      });
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
      socket.on("message", (message) => {
        console.log("Message received: " + message);
      });
      socket.on("your id", (name) => {
        console.log(`Your name is ${name}`);
        setName(name);
      });
      socket.on("your team", (team) => {
        console.log(`You are on the ${team} team`);
        setTeam(team);
      });
      socket.on("team members", (teamMembers) => {
        console.log(`Team members: ${teamMembers.join(", ")}`);
        setTeamMembers(teamMembers);
      });
    }, []);
  
  return (
    <div className={`team team--${team}`}>
    <Card >
      <p>{name ? `Moikka, ${name}` : 'Ladataan...'}</p>
      <p>{team ? `Kuulut ${team === 'red' ? 'punaiseen' : 'siniseen'} joukkueeseen!` : 'Asetetaan tiimiä...'}</p>
      <p>Odotellaan muita!</p>
        <LoadingSpinner />
          </Card>
          </div>
  );
};

export default LandingPage;