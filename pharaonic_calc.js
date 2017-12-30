// Copy rights reserved for "Mohamed Abulnasr". Before reuse this code email me on objectiveerp@gmail.com 
$(document).ready(function() {
				$("button").click(function(){
					keepThem(this);
				});
				$("body").keyup(function(event){
					var v=event.key;
					if (/^[\d|+|\-|\/|*|=|%]$/g.test(v) || v=='Enter' || v=='Escape' || v=='Backspace') {
						v=v.replace("*", "×").replace("/", "÷").replace('Enter', '=').replace('Escape', 'AC').replace('Backspace', '←');
						var e={id:v};
						keepThem(e);
					}
				});
			});
			var algList='';
			function keepThem(a){
				var v=a.id
				switch(v) {
					case "=":
						if(!/[+|\-|×|÷|%]/g.test($("#en").text()))
							break;
						algList+=$("#en").text();
						$("#alg").text(algList);
						$("#en").text("");
						algList= algList.replace("=", "").replace("×", "*").replace("÷", "/");
						var r=eval(algList);
						algList='';
						$("#en").text("");
						$("#en").text(r);					
						break;
					case "AC":
						$("#en").text("0");						
						algList='';
						$("#alg").text('');
						break;
					case "CE":
						$("#en").text("0");
						break;
					case "←":
						$("#en").text($("#en").text().substring(0,$("#en").text().length-1));
							if($("#en").text()=="")
								$("#en").text("0");
						break;
					default:
						if($("#en").text()=="0")
							$("#en").text(v);
						else{
							if($("#en").text().length<17)
							$("#en").append(v);
						}
						if(/[+|\-|×|÷|%]$/g.test(v)){
							algList+=$("#en").text().substring(0,$("#en").text().length-1);
							$("#alg").text(algList);
							$("#en").text(v);
						}
				}
				$("#"+v).blur();
			}
