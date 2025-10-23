import React from "react";
import { useParams } from "react-router";

export default function ViewCourses() {
    const { id } = useParams();
    return (
        <>
            <h1>Courses Id :{id} </h1>
        </>
    )
}