import React from "react";
import "./ErrorPage.css";
import Button from "../../components/atoms/Buttons/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h1 className="error-page__title">404</h1>
            <p className="error-page__text">Page not found</p>
            <Button onClick={() => navigate("/")} className="button-primary">Back to Home</Button>
        </div>
    );
};

export default ErrorPage;
