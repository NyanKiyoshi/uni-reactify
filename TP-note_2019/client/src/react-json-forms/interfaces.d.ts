type ErrorCallback = (exc: any) => any;
type JSONBodyCallback = (exc: any) => void;

interface IJSONFormProps {
    baseurl: string,
    path: string,
    onError: ErrorCallback,
    onBody: JSONBodyCallback
}

interface IJSONFormState {
    dataLoaded: boolean,
    error: any
}
