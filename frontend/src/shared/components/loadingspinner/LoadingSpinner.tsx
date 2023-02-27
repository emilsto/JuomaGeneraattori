import "./LoadingSpinner.css";

const LoadingSpinner = () => {
    return (
        <div>
            <div className="lds-dual-ring" data-testid="loading-spinner"></div>
        </div>
    );
};

export default LoadingSpinner;