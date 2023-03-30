const httpreq = async (method, token, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const httpRequests = (token) => {
    return {
        get: httpreq.bind(null, 'GET', token),
        post: httpreq.bind(null, 'POST', token),
        put: httpreq.bind(null, 'PUT', token),
        patch: httpreq.bind(null, 'PATCH', token),
        delete: httpreq.bind(null, 'DELETE', token),
    }
};
