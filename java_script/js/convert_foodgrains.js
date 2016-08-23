const readline = require('readline');
const fs = require('fs');
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;
var dflag=false;
const rl = readline.createInterface({
  input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});
rl.on('line', function(line) 
{
   var lineRecords= line.trim().split(',');;
   for(var i=0,k=0;i<lineRecords.length,k<lineRecords.length;i++,k++)
   {
       if(isHeader)
       {       
           header[i]=lineRecords[i];
       }
       else
       {
          dflag=true;
       
             if(header[i]=='Frequency') 
             {
                 k++;      
             }
            else if (header[i]==' 3-2013') 
              {
                  tempData[header[i]]=lineRecords[k].replace(/[NA]/g,"0");
              }
            else if (header[i]=='Particulars') 
              {
                  tempData[header[i]]=lineRecords[k];
              }
        }       
    }

isHeader=false;
if(dflag)
{
    if ((lineRecords[0].indexOf("Foodgrains") > -1)) 
    {
      jsonData.push(tempData);
      fs.writeFileSync("Foodgrains_json.json",JSON.stringify(jsonData),encoding="utf8");
    }
}   
tempData={};
});

