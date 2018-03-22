
   window.Validator = function (val, rule) {
    // console.log(val)
    // this.rule = rule;
    console.log(rule)
    this.is_valid = function(now_val){
        val = now_val || val;
        // console.log(val.length)
        console.log(rule)
        for(var key in rule){
            console.log('validate_'+key)
            if(!this['validate_'+key]())
            return false;
        }
        return true;
    }
    this.validate_required = function(){
        return rule.required === 'required';
    }
    this.validate_numical = function(){
        if(rule.numical)
        return Number.isNaN(val);
    }
    this.validate_min = function(){
        var min = rule.min;
        return val >= min;
    }
    this.validate_max = function(){
        var max = rule.max;
        return val<= max;
    }
    this.validate_minlength = function(){
        
        var minlength = rule.minlength;
        var length = val.length;
        // console.log(length>=minlength)
        return length>=minlength;
    }
    this.validate_maxlength = function(){
        var maxlength = rule.maxlength;
        var length = val.length;
        return length <= maxlength;
    }
    this.validate_tel_length = function(){
        // var tel_length = rule.length;
        var re  = /\d{11}/;
        return re.test(val)
    }
}
    window.Input = function(ele){
        ele = ele instanceof $ ? ele : $(ele);
        var val = ele.val();
        // console.log(val)
        var parsed_rule = {};
        var that = this;
        this.load_validator = function () {
            this.validator = new Validator(val,parsed_rule);
          }
        function init(){
           parsed_rule = get_rule();
        //    console.log(parsed_rule)
        //    that.validator = new Validator(val,parsed_rule);
        //    console.log(that.validator.is_valid())
        that.load_validator();
           listen();
        //    console.log(parsed_rule)
        };
        
        function get_rule(){
            var i;
            var rule_str = ele.data('rule');
            if (!rule_str) return;
            var rule_arr = rule_str.split('|'); // [ 'min:18', 'maxlength:10']
            for (i = 0; i < rule_arr.length; i++) {
              var item_str = rule_arr[i].trim();
              var item_arr = item_str.split(':'); // ['min','18']
              parsed_rule[item_arr[0].trim()] = JSON.parse(item_arr[1].trim()); // {min: 18}
            }
            return parsed_rule;
        }
        function listen(){
            ele.on('blur',function(){
                var now_val = ele.val();
                var name = ele.attr('name');
  
    
                if(that.validator.is_valid(now_val)){
                    $('#'+name+'_error_info').hide(500);
                }else{
                    $('#'+name+'_error_info').show(500);
                }
            })
        }
        init();
    }

