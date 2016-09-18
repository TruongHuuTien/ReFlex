var reflex = (function(){
  var _defaultOptions = {
    scope : "body"
  };
  
  var Reflex = function(data, template, options) {
    if (data !== undefined) {
      this.data = data;
    }
    if (template !== undefined) {
      this.template = template;
    }
    
    if (options === undefined) {
      this.$scope = $(_defaultOptions.$scope);
    } else {
      if (options.$scope === undefined) {
        this.$scope = $(_defaultOptions.scope);
      } else {
        this.$scope = options.$scope;
      }
    }
    
    
    this.analyse();
    this.render();
  };
  
  Reflex.prototype.analyse = function() {
  	this.formatted = {};
  };
  
  Reflex.prototype.render = function() {
    var formatted = this.formatted;
    
    this.$scope.find("[rf]").each(function(){
      var $this = $(this);
      var attr = $this.attr("rf");
      var content = formatted[attr];
      
			if ($this.is('input')) {
				$this.val(content);
			} else {
				$this.html(content);
			}
  	});
  };
  
  return Reflex;
})();