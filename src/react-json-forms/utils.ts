export function getUrl(baseurl: string, path: string) : string {
    return baseurl + path;
}

export async function sendRequest(input: RequestInfo, init?: RequestInit): Promise<Response> {
    const response = await fetch(input, init);

    if (response.status < 200 || response.status >= 400) {
        throw [`Request '${input}' returned an invalid status code`, response];
    }

    return response;
}
