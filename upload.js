$(document).ready(function(){if(window.location.hostname==zheardblog){$("head").append(cssCrop);$("head").append(jsCrop);$("head").append(jqueryCrop);var b=document.getElementById("Nimg");var e=document.getElementById("Cimg");var d=vitri;$("#tad-taoanh").click(function(){$("#cropanh").click();d=vitri;$("#img-out").hide();$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> "+tdta);setTimeout(function(){i()},200)});function i(){var a=new Image();a.crossOrigin="Anonymous";a.src=markimg;a.onload=function(){var f=new Image();f.crossOrigin="Anonymous";f.src=bgimg;f.onload=function(){c=document.querySelector("canvas"),ctx=c.getContext("2d"),corners=d,step=tadStep;var D,h,g,A,q,E,B,l,s=e.width-1,n=e.height-1;ctx.clearRect(0,0,c.width,c.height);ctx.save();for(y=0;y<n;y+=step){for(x=0;x<s;x+=step){q=p(corners[0],corners[3],y/n);E=p(corners[1],corners[2],y/n);B=p(corners[0],corners[3],(y+step)/n);l=p(corners[1],corners[2],(y+step)/n);D=p(q,E,x/s);h=p(q,E,(x+step)/s);g=p(B,l,(x+step)/s);A=p(B,l,x/s);ctx.drawImage(e,x,y,step,step,D.x,D.y,Math.ceil(Math.max(step,Math.abs(h.x-D.x),Math.abs(A.x-g.x)))+1,Math.ceil(Math.max(step,Math.abs(D.y-A.y),Math.abs(h.y-g.y)))+1)}}if(tadMk=="black"){ctx.save();ctx.globalAlpha=0.3;ctx.fillStyle="#333";ctx.fillRect(0,0,c.width,c.height);ctx.restore()}ctx.globalCompositeOperation="destination-in";ctx.drawImage(a,0,0,c.width,c.height);ctx.restore();ctx.save();ctx.globalCompositeOperation="destination-over";ctx.drawImage(f,0,0,c.width,c.height);ctx.restore();if(b){ctx.save();ctx.globalAlpha=0.5;var r=ctx.createPattern(b,"repeat");ctx.fillStyle=r;ctx.fillRect(0,0,c.width,c.height);ctx.restore()}setTimeout(function(){c.toBlob(function(k){var j=URL.createObjectURL(k);$("#img-out").html("<label class='mt-2'>"+tkq+"</label><img src='"+j+"' alt='taoanhdep' class='img-thumbnail'></img><a href='"+j+"' class='btn btn-block btn-primary mt-2' download='taoanhdep_"+tenanhxuat+"'><i class='fas fa-cloud-download-alt'></i> "+ttav+"</a>");$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> "+tta);$("#img-out").show()},"image/jpeg")},1000);function p(m,k,j){return{x:m.x+(k.x-m.x)*j,y:m.y+(k.y-m.y)*j}}}}}}});
