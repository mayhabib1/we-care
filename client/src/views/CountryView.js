var CountryView = Backbone.View.extend({
  
  events: {
    'click': 'countryClicked'
  },
  
  initialize: function() {
    d3.select(this.el)
      .attr("id", function(d) {
        return d.id;
      });

    // this.on('showTooltip', function() {
      
    // }, this);
    _.extend(Backbone.View.prototype, {
      getCentroid: function(element) {
        // get the DOM element from a D3 selection
        // you could also use "this" inside .each()
        console.log(element instanceof d3.select)
        if (element instanceof d3.selection){
          element = element.node();
        }
        // use the native SVG interface to get the bounding box
        bbox = element.getBBox();
        console.log(bbox);
        // return the center of the bounding box
        return [bbox.x + bbox.width/2, bbox.y + bbox.height/2];
      }
    });
  },

  countryClicked: function() {
    d3.select(this.el)
      .classed('selected', true);
    this.showTooltip(this);
    this.trigger('countryClicked', this);
    //trigger request for news and charities 
    
  },

  // getCentroid: function(element) {
  //   // get the DOM element from a D3 selection
  //   // you could also use "this" inside .each()
  //   // var element = selection.node(),
  //   // use the native SVG interface to get the bounding box
  //   bbox = element.getBBox();
  //   console.log(bbox);
  //   // return the center of the bounding box
  //   return [bbox.x + bbox.width/2, bbox.y + bbox.height/2];
  // },

  showTooltip: function(country) {

    

    var countryName = country.$el.attr('id');

    tooltip = d3.select('#countries')
      .append('g')
      .attr('class', 'tooltip ' + countryName)
      //.attr('id', 'tooltip-'+countryName);

    // var coord = country.$el.attr('d').split(',').slice(0,2);
    // coord = {
    //   x: coord[0].slice(1),
    //   y: coord[1].split('L')[0]
    // }

    // console.log(coord);
    var coord = this.getCentroid(country.el);
    coord = {
      x: coord[0],
      y: coord[1]
    };

    tooltip
      .append('rect')
      .attr({ width: 130, height: 140, rx: 5, ry: 5, x: coord.x, y: coord.y, class: 'bg' });
      //.attr('transform', 'translate(' + coord.x + ',' + coord.y + ')');
    
    var desc = tooltip.append('g').attr('class', 'desc')
    desc.append('text').attr('class', 'name').text('name: ')//.attr('transform', 'translate(5,15)')
    desc.append('text').attr('class', 'title').text('title: ')//.attr('transform', 'translate(5,35)')
    desc.append('text').attr('class','union').text('union: ')//.attr('transform', 'translate(5,55)')
    desc.append('text').attr('class','main').text('total: ')//.attr('transform', 'translate(5,75)')
    
    // return tooltip
  },

});
