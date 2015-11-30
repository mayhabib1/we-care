var NewsModel = Backbone.Model.extend({
  url: '/top',
  parse: function(data) {
    console.log(JSON.stringify(data), 'data');
    return {
      breakingNews: data
    }
  },
  initialize: function() {
    this.on('getNews', this.getNews, this)
  },
  getNews: function() {
    var context = this;
    this.fetch({
      success: function() {
        context.trigger('newsLoaded', context.get('breakingNews'));
      },
      error: function() {
        console.log('Error fetching breaking news')
      }
    })
  }
});
