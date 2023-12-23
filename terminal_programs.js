
var PROGAMS = {

  help: function(...a) {
    this.printa({
      "headers": ["command", "description"],
      "help": ["commands list"],
      "banner": ["banner website"],
      "free": ["free section"],
      "chat": ["chatroom"],
      "geek": ["happy computer"],
      "asciicat [text]": ["funny cat"],
      "skills": ["test"],
      "go [address]": ["TLD > .ir"],
      "github": ["github we"],
      "alert": ["dialog javascript"],
      "clear": ["clear terminal"],
      "exit": ["exit terminal"]
    });
  },

  banner: function(...a){
    self.printa("<img style='height:50px;' SRC='banner.png'><br><p style='color:red; font-family:tahoma; font-size:15px; font-weight:900;'>Welcome to Cyb3r.W3B website</p>");
  },
  skills: function (...a){
    self.printa({
    	"headers": ["lang", "skill"],
        "HTML,CSS": ["85%"],
        "Python": ["55%"],
        "JavaScript": ["65"],
        "node.js": ["60%"],
        "PHP": ["20%"],
        "VBScript": ["70%"],
        "VBA script": ["70%"],
        "Bash script": ["90%"],
        "C++": ["40%"],
        "batch script": ["60%"],
        "brain fuck": ["30%"],
        "java,Xml": ["20%"],
        "linux": ["90%"],
        "GIT": ["85"]
    });
  	},
  free: function(...a){
    window.open("free.html", "_blank");
  },
  chat: function(...a){
    window.open("chat.html", "_blank");
  },
  geek: function(...a){
    self.printa("<img SRC='riLnpd6dT.gif' style='margin-left:30px; height:150px;'/><br><p style='font-size:15px; font-weight:900;'>programmer and geek computer</p>");
  },
  asciicat: function(...a){
  	self.printa("<pre>###########<br>#  <a style='color:yellow; font-weight:900;'>"+a[0]+"</a>  #<br>###########<br>          +<br>           +<br><p style='font-size:25px; font-weight:900; color:green;'>     ^_____^<br>     | *-* |___/\n     ##---##</p></pre>");
  	},
  alert: function(...a){
    alert(a[0]);
  },
  go: function(...a) {
    window.open("https://"+a[0]+".ir");
  },
  github: function(...a){
    this.printa("GITHUB: https://github.com/Mr-Banana-2045");
    window.open("https://github.com/Mr-Banana-2045", "_blank", "width=786, height=786");
  },
  clear: function(...a) {
    this.clear_terminal();
  },
  exit: function(...a){
    window.close();
  }
};
