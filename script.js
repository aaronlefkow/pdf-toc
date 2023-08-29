function modifySharePointLink(link) {
    // Scenario 1: If the link has "FolderCTID"
    if (link.includes("FolderCTID")) {
        // Remove text between "Forms/AllItems.aspx?" and the first occurrence of "%2FShared%20Documents%2F"
        const step1 = link.replace(/Forms\/AllItems\.aspx\?.*?%2FShared%20Documents%2F/, "");
        
        // Remove text including and after "&parent"
        const modifiedLink = step1.replace(/&parent.*/, "");
        
        return decodeURIComponent(modifiedLink);
    }
    
    // Scenario 2: If the link has "Forms/AllItems.aspx?id="
    if (link.includes("Forms/AllItems.aspx?id=")) {
        // Remove text between "Forms/AllItems.aspx?id=" and the first occurrence of "%2FShared%20Documents%2F"
        const step1 = link.replace(/Forms\/AllItems\.aspx\?id=.*?%2FShared%20Documents%2F/, "");
        
        // Remove text including and after "&parent"
        const modifiedLink = step1.replace(/&parent.*/, "");
        
        return decodeURIComponent(modifiedLink);
    }
    
    // Return unmodified link if none of the scenarios match
    return link;
}

function replaceSpacesWithPercent20(link) {
    return link.replace(/\s/g, '%20');
}

function modifyUrl() {
    const inputUrlElement = document.getElementById("inputUrl");
    const outputUrlElement = document.getElementById("outputUrl");
    
    const inputUrl = inputUrlElement.value;
    const modifiedUrl = modifySharePointLink(inputUrl);
    const encodedUrl = replaceSpacesWithPercent20(modifiedUrl);

    outputUrlElement.textContent = encodedUrl;
}

function openModifiedUrl() {
    const inputUrlElement = document.getElementById("inputUrl");
    const inputUrl = inputUrlElement.value;
    const modifiedUrl = modifySharePointLink(inputUrl);
    const encodedUrl = replaceSpacesWithPercent20(modifiedUrl);

    // Open the modified URL in a new tab
    window.open(encodedUrl, "_blank");
}

// Test scenarios
// Test scenarios
// const scenario1Input = "https://allinahealth1com.sharepoint.com/teams/ReferralManagement/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x01200076B57FF83E2A5940B3487FCBFEB75B23&id=%2Fteams%2FReferralManagement%2FShared%20Documents%2FGeneral%2FWorkflows%2FPrior%20Authorizations%20Using%20Payer%20Websites%20%2D%20Resource%20Guide%2Epdf&parent=%2Fteams%2FReferralManagement%2FShared%20Documents%2FGeneral%2FWorkflows";
// const scenario2Input = "https://allinahealth1com.sharepoint.com/sites/rcm-RCMpriorAuth/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Frcm%2DRCMpriorAuth%2FShared%20Documents%2FCollaboration%2FCPA%20%2D%20Patient%20WQ%20Workflow%2Epdf&parent=%2Fsites%2Frcm%2DRCMpriorAuth%2FShared%20Documents%2FCollaboration";

// const scenario1Output = modifySharePointLink(scenario1Input);
// const scenario2Output = modifySharePointLink(scenario2Input);

// const scenario1Final = replaceSpacesWithPercent20(scenario1Output);
// const scenario2Final = replaceSpacesWithPercent20(scenario2Output);

// // console.log("Scenario 1 final output:", scenario1Final);
// // console.log("Scenario 2 final output:", scenario2Final);
