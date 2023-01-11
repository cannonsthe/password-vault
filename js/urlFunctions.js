function scanURL(url) {
 // Check the URL against a list of regular expressions for known malware URLs
 let malwarePatterns = [/malware\.com/, /evil\.net/, /hack\.org/];
 for (let i = 0; i < malwarePatterns.length; i++) {
   if (malwarePatterns[i].test(url)) {
     return "This URL is known to contain malware.";
   }
 }

 // Check the URL against an online malware database
 let response = fetch("https://safebrowsing.googleapis.com/v4/threatMatches:find?key=API_KEY", {
   method: "POST",
   body: JSON.stringify({
     client: {
       clientId: "MyApp",
       clientVersion: "1.0.0"
     },
     threatInfo: {
       threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
       platformTypes: ["ANY_PLATFORM"],
       threatEntryTypes: ["URL"],
       threatEntries: [
         {url: url}
       ]
     }
   })
 });
 let json = response.json();
 if (json.matches.length > 0) {
   return "This URL is known to contain malware.";
 }

 return "This URL does not appear to contain malware.";
}

// Test the scanner
console.log(scanURL("example.com"));
console.log(scanURL("malware1.com"));
console.log(scanURL("evil.net"));
console.log(scanURL("https://safebrowsing.googleapis.com/v4/threatMatches:find?key=API_KEY"));