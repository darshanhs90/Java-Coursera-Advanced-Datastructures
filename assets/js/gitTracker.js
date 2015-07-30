
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
  var svg;
  function f1(){
    var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = 960 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

    var x = d3.scale.linear()
    .domain([0, 5.9])
    .range([0, width]);

    var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height, 0]);

    var z = d3.scale.linear()
    .domain([0, 5.9])
    .range([0, 360]);

    var points = d3.range(0, 6, .1).map(function(t) {
      return {value: t, 0: x(t), 1: y(Math.sin(t))};
    });

    svg = d3.select("#waver").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var path = svg.selectAll("path")
    .data(quad(points))
    .enter().append("path")
    .style("fill", function(d) { return d3.hsl(z(d[1].value), 1, .5); })
    .style("stroke", "#000");

    var t0 = Date.now();
    d3.timer(function() {
      var dt = (Date.now() - t0) * .001;
      points.forEach(function(d) { d[1] = y(d.scale = Math.sin(d.value + dt)); });
      path.attr("d", function(d) { return lineJoin(d[0], d[1], d[2], d[3], 80 * d[1].scale * d[1].scale + 10); });
    });

// Compute quads of adjacent points [p0, p1, p2, p3].
function quad(points) {
  return d3.range(points.length - 1).map(function(i) {
    return [points[i - 1], points[i], points[i + 1], points[i + 2]];
  });
}

// Compute stroke outline for segment p12.
function lineJoin(p0, p1, p2, p3, width) {
  var u12 = perp(p1, p2),
  r = width / 2,
  a = [p1[0] + u12[0] * r, p1[1] + u12[1] * r],
  b = [p2[0] + u12[0] * r, p2[1] + u12[1] * r],
  c = [p2[0] - u12[0] * r, p2[1] - u12[1] * r],
  d = [p1[0] - u12[0] * r, p1[1] - u12[1] * r];

  if (p0) { // clip ad and dc using average of u01 and u12
    var u01 = perp(p0, p1), e = [p1[0] + u01[0] + u12[0], p1[1] + u01[1] + u12[1]];
    a = lineIntersect(p1, e, a, b);
    d = lineIntersect(p1, e, d, c);
  }

  if (p3) { // clip ab and dc using average of u12 and u23
    var u23 = perp(p2, p3), e = [p2[0] + u23[0] + u12[0], p2[1] + u23[1] + u12[1]];
    b = lineIntersect(p2, e, a, b);
    c = lineIntersect(p2, e, d, c);
  }

  return "M" + a + "L" + b + " " + c + " " + d + "Z";
}

// Compute intersection of two infinite lines ab and cd.
function lineIntersect(a, b, c, d) {
  var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3,
  y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3,
  ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
  return [x1 + ua * x21, y1 + ua * y21];
}

// Compute unit vector perpendicular to p01.
function perp(p0, p1) {
  var u01x = p0[1] - p1[1], u01y = p1[0] - p0[0],
  u01d = Math.sqrt(u01x * u01x + u01y * u01y);
  return [u01x / u01d, u01y / u01d];
}

}
f1();














function f2(){
  var width = 960,
  height = 500,
  radius = 80,
  x = Math.sin(2 * Math.PI / 3),
  y = Math.cos(2 * Math.PI / 3);

  var offset = 0,
  speed = 4,
  start = Date.now();

  var svg = d3.select("#loader").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(.55)")
  .append("g");

  var frame = svg.append("g")
  .datum({radius: Infinity});

  frame.append("g")
  .attr("class", "annulus")
  .datum({teeth: 80, radius: -radius * 5, annulus: true})
  .append("path")
  .attr("d", gear);

  frame.append("g")
  .attr("class", "sun")
  .datum({teeth: 16, radius: radius})
  .append("path")
  .attr("d", gear);

  frame.append("g")
  .attr("class", "planet")
  .attr("transform", "translate(0,-" + radius * 3 + ")")
  .datum({teeth: 32, radius: -radius * 2})
  .append("path")
  .attr("d", gear);

  frame.append("g")
  .attr("class", "planet")
  .attr("transform", "translate(" + -radius * 3 * x + "," + -radius * 3 * y + ")")
  .datum({teeth: 32, radius: -radius * 2})
  .append("path")
  .attr("d", gear);

  frame.append("g")
  .attr("class", "planet")
  .attr("transform", "translate(" + radius * 3 * x + "," + -radius * 3 * y + ")")
  .datum({teeth: 32, radius: -radius * 2})
  .append("path")
  .attr("d", gear);

  d3.selectAll("input[name=reference]")
  .data([radius * 5, Infinity, -radius])
  .on("change", function(radius1) {
    var radius0 = frame.datum().radius, angle = (Date.now() - start) * speed;
    frame.datum({radius: radius1});
    svg.attr("transform", "rotate(" + (offset += angle / radius0 - angle / radius1) + ")");
  });

  d3.selectAll("input[name=speed]")
  .on("change", function() { speed = +this.value; });

  function gear(d) {
    var n = d.teeth,
    r2 = Math.abs(d.radius),
    r0 = r2 - 8,
    r1 = r2 + 8,
    r3 = d.annulus ? (r3 = r0, r0 = r1, r1 = r3, r2 + 20) : 20,
    da = Math.PI / n,
    a0 = -Math.PI / 2 + (d.annulus ? Math.PI / n : 0),
    i = -1,
    path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];
    while (++i < n) path.push(
      "A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0),
      "L", r2 * Math.cos(a0), ",", r2 * Math.sin(a0),
      "L", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
      "A", r1, ",", r1, " 0 0,1 ", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
      "L", r2 * Math.cos(a0 += da / 3), ",", r2 * Math.sin(a0),
      "L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0));
      path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
    return path.join("");
  }

  d3.timer(function() {
    var angle = (Date.now() - start) * speed,
    transform = function(d) { return "rotate(" + angle / d.radius + ")"; };
    frame.selectAll("path").attr("transform", transform);
  frame.attr("transform", transform); // frame of reference
});

}
f2();



$http.get('https://api.github.com/users/darshanhs90/repos')
.success(function(data, status, headers, config) {
  console.log(data);
  $('#waver').css('visibility','hidden');
  $('#waver').css('height','0px');
  
  $('#contributions').css('visibility','visible');
  $('#contributions').css('height','250px');
  new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
  { year: '2008', value: 20 },
  { year: '2009', value: 10 },
  { year: '2010', value: 5 },
  { year: '2011', value: 5 },
  { year: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});
});

$http.get('https://api.github.com/users/darshanhs90')
.success(function(data, status, headers, config) {
  console.log(data);
  $('#loader').css('visibility','hidden');
  $('#loader').css('height','0px');
  
  $('#areas').css('visibility','visible');
  $('#areas').css('height','250px');
  Morris.Donut({
    element: 'donut-example',
    data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20}
    ]
  });

});



});