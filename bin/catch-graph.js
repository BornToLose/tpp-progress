function qsFilter(t,a,e){return!(QueryString.day&&Duration.parse(t.Time,a.StartTime).TotalDays>parseFloat(QueryString.day)||QueryString.pokemon&&e>=parseInt(QueryString.pokemon)||!QueryString.wifi&&0<=(t.Class||"").indexOf("WifiTrade"))}$.when.apply($,Array.prototype.concat.apply([],tppData.filter(function(t){return 0==t.Name.indexOf("Season")}).map(function(r){return r.Runs.filter(function(t){return t.Scraper&&t.Scraper.pokemon||0<t.Events.filter(function(t){return"Pokemon"==t.Group}).length}).map(function(t){return $.when(t.Scraper?Scrape(t):t).then(function(e){Duration.parse(e.EndDate||e.Duration,e.StartTime).TotalSeconds>Date.now()/1e3-e.StartTime&&(e.Duration=(new Date).toISOString(),e.Ongoing=!0);var t={color:e.ColorPrimary,label:e.RunName,data:e.Events.filter(function(t){return"Pokemon"==t.Group&&"Egg"!=t.Name}).sort(function(t,a){return Duration.parse(t.Time,e.StartTime).TotalTime(r.Scale)-Duration.parse(a.Time,e.StartTime).TotalTime(r.Scale)}).filter(function(t,a){return qsFilter(t,e,a)}).map(function(t,a){return[Duration.parse(t.Time,e.StartTime).TotalTime(TPP.Scale.Days),a+1]})},a=Duration.parse(e.Duration,e.StartTime).TotalTime(TPP.Scale.Days);return QueryString.day&&a>parseFloat(QueryString.day)&&(a=parseFloat(QueryString.day)),t.data[t.data.length-1][0]<a&&(!QueryString.pokemon||t.data.length<parseInt(QueryString.pokemon))&&t.data.push([a,t.data.length]),t.data.unshift([0,0]),t})})}))).then(function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];console.dir(t);var o=null;$.plot($(".charts").css({width:"80vw",height:"80vh",margin:"auto"}).on("plothover",function(t,a,e){var r,n;e?(o=o||$('<div class="tooltip">').appendTo("body").css("position","absolute"),(r=new Duration(0)).TotalDays=e.datapoint[0],n=e.series.label+"\n"+e.datapoint[1]+" Pokémon\n"+r.toString(TPP.Scale.Days),console.log(n),o.css({left:e.pageX,top:e.pageY}).attr("data-label",n).show()):o&&o.hide()}),t,{legend:{backgroundOpacity:.5},grid:{hoverable:!0}});var e=$("<h3>").text('Pokédex "Owned" Over Time');$(".charts").append($("<div class='axisLabel'>").text("Days")).append($("<div class='axisLabel yaxisLabel'>").text("Pokémon")).append(e),QueryString.day&&e.append("<small>(First "+QueryString.day+" Days)</small>"),QueryString.pokemon&&e.append("<small>(First "+QueryString.pokemon+" Pokémon)</small>")});