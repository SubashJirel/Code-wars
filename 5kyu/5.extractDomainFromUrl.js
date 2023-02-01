/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
function domainName(url){
    //your code here
    let regex = /((http(s)?:\/\/(www.)?)|(www.))(.*?)\./
  
    if(regex.test(url)) { // if it starts with http:// or www. or http://www.
    let match =  url.match(regex)
    return match[6]
    }
    else {
      let regex2 = /(.*?)\./
      let match2 = url.match(regex2)
      return match2[1].trim()
    }
  }
  console.log(domainName("http://google.com hello is theere anything"))
  console.log(domainName("www.xakep.ru"))
  console.log(domainName(" http://www.i075aptpkxhnlm.edu"))
  console.log(domainName("  ltgr3o24btn1qi.pro/index.php"))
  
  //using another regex
  function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }
  //other code
  function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };