let checkbag=(str1,str2,str3)=>{
              
              let initialwt = intinp(str1);
              alert('Checking Baggage weight: '+ intinp(str1));
            
              let removalwt = 0;
              if (initialwt >= 15) {
                
                removalwt = initialwt - 15;
                alert('Baggage is overwight weight by: '+ removalwt);
                setvalue(str2,removalwt);
                removewt(str1,str2,str3);
                
              }
              else {
                
                alert('Baggage weight is in acceptable range : ');
              }
              document.getElementById(str2).style='display:block;'
              document.getElementById(str3).style='display:block;'
            }
            let removewt=(str1,str2,str3)=>{
              
              let initialwt = intinp(str1);
              let removalwt = intinp(str2);
              alert('Removing weight: '+removalwt);
              
              let finalwt = initialwt - removalwt;
              document.getElementById(str3).value = finalwt;
              alert('Final Weight after unloading = '+finalwt);
              document.getElementById(str3).style='display:block;'
            }