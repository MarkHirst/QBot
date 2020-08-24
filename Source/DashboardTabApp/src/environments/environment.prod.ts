export const environment = {
    production: false,
    apiBaseUrl: "https://qbotbaseeight.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "6716e2a7-e414-4fcd-884a-a63c6d3c2d27",
        clientId: "18223871-001c-45b7-a292-ea4eb16ba889",
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
};
