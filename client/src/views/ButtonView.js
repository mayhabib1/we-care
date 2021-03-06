var Button = Backbone.View.extend({
  events: {
    'click': 'buttonClicked'
  },
  initialize: function() {
    this.newsDisabled = false;
    this.isShrank = false;
    this.$mainBtn = this.$el;
    this.$mapBtn;
    this.toggleIconClass();

    // Toggle elements
    this.$mainToggle; 
    this.$mapToggle;
  },
  toggleIconClass: function() {
    if (!this.newsDisabled) {
      this.$mainBtn.text('Hide Breaking News');
      if (this.isShrank) {
        this.$el.addClass('ion-ios-eye-outline');
        this.$el.removeClass('ion-ios-eye');
      }
    } else {
      this.$mainBtn.text('Show Breaking News');
      if (this.isShrank) {
        this.$el.removeClass('ion-ios-eye-outline');
        this.$el.addClass('ion-ios-eye');
      }
    }
  },
  buttonClicked: function() {
    if (!this.newsDisabled) {
      this.newsDisabled = true;
      this.toggleIconClass();
      this.trigger('hideNews');
    } else {
      this.newsDisabled = false;
      this.toggleIconClass();
      this.trigger('showNews');
    }
  }, 
  swapDomButton: function(mustShrink) {
    var newElement;
    this.$mapBtn = this.$mapBtn || $('.map-breaking-news button');
    this.$mapToggle = this.$mapToggle || $('.toggle-source-news .onoffswitch');
    this.$mainToggle = this.$mainToggle || $('.onoffswitch:eq(0)');
    if (!mustShrink) {
      newElement = this.$mainBtn;
      this.isShrank = false;
    } else {
      newElement = this.$mapBtn;
      this.isShrank = true;
      $('.map-bn-container').attr('x', $('svg').attr('width') - 55);
    }
    this.setElement(newElement);
    this.toggleButtons();
  },
  toggleButtons: function() {
    if (this.isShrank) {
      this.toggleIconClass();
      this.$mainBtn.css('display', 'none');
      this.$mapBtn.css('display', 'block');
      this.$mainToggle.css('display', 'none');
      this.$mapToggle.css('display', 'block');
    } else {
      this.$mainBtn.css('display', 'inline-block');
      this.$mapBtn.css('display', 'none');
      this.$mainToggle.css('display', 'inline-block');
      this.$mapToggle.css('display', 'none');
    }
  }
})
