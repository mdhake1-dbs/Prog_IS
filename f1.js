let check=()=>{
              
              let initialwt = parseInt(document.getElementById('weight').value);
              
                                       
              alert('Checking Baggage weight: '+parseInt(document.getElementById('weight').value));
            
              let removalwt = 0;
              if (initialwt >= 15) {
                
                removalwt = initialwt - 15;
                alert('Baggage is overwight weight by: '+ removalwt);
                document.getElementById('removed').value = removalwt;
                
              }
              else {
                
                alert('Baggage weight is in acceptable range : ');
              }
              document.getElementById('removed').style='display:block;'
              document.getElementById('remB').style='display:block;'
            }
            let remove=()=>{
              
              let initialwt = parseInt(document.getElementById('weight').value)
              let removalwt = parseInt(document.getElementById('removed').value);
              alert('Removing weight: '+removalwt);
              
              let finalwt = initialwt - removalwt;
              document.getElementById('finalwt').value = finalwt;
              alert('Final Weight after unloading = '+finalwt);
              document.getElementById('finalwt').style='display:block;'
            }