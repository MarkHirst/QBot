export const environment = {
    production: false,
    apiBaseUrl: "https://TemplatedQbot.azurewebsites.net/api/Request/",
    selfUrl: "https://TemplatedQbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "55b40f4c-f93f-4ee4-ad1c-1376026d0d62",
        clientId: "2ea0952d-917a-46e9-9f00-5990fb5c0e30",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
