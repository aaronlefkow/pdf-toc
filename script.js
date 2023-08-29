function modifyUrl() {
    const inputUrl = document.getElementById("inputUrl").value;

    // Extract the base URL
    const baseUrl = "https://allinahealth1com.sharepoint.com";

    // Extract the specific part of the URL between "Forms/AllItems.aspx?id=" and "&parent"
    const startIndex = inputUrl.indexOf("Forms/AllItems.aspx?id=") + "Forms/AllItems.aspx?id=".length;
    const endIndex = inputUrl.indexOf("&parent");
    let specificPart = inputUrl.substring(startIndex, endIndex);

    // Replace %2E with a dot (.) in the specific part
    specificPart = specificPart.replace(/%2E/g, '.');

    // Replace %2F with a forward slash (/) in the specific part
    specificPart = specificPart.replace(/%2F/g, '/');

    // Replace %2D with a hyphen (-) in the specific part
    specificPart = specificPart.replace(/%2D/g, '-');

    // Combine the base URL with the modified specific part
    const modifiedUrl = baseUrl + specificPart;

    // Create an <a> element
    const linkElement = document.createElement("a");
    linkElement.href = modifiedUrl;
    linkElement.target = "_blank"; // Open in a new tab
    linkElement.textContent = modifiedUrl;

    // Clear previous content and append the <a> element
    const outputUrlElement = document.getElementById("outputUrl");
    outputUrlElement.innerHTML = "";
    outputUrlElement.appendChild(linkElement);
}
