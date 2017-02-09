var app = new Vue({
  el: '#app',
  data: Listed.data,
  methods: Listed.methods,
  computed: Listed.computed
});

// load the user list and history data
Listed.methods.load(Listed.methods.dataLoaded);   // calls listed.ui method

// save the user list and history data
setInterval( function() {
  Listed.methods.save( function() {
    Materialize.toast('changes saved', 1500);
    });
  }, 2000);

// toggle loading as complete
setTimeout( function() { Listed.data.loading = false; }, 1000);
