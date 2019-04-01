import * as React from "react";

interface IFetchErrorAlertProps {
    history: any
}

export default function (props: IFetchErrorAlertProps) : any {
    return (
        <div className="m-4 alert alert-danger" role="alert">
            Fetch failed!
            <button onClick={props.history.goBack} className="btn btn-outline-danger d-inline-block ml-2">Go back</button>
        </div>
    );
};
