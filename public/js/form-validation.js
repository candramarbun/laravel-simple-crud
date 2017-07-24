$(function() {
  $("form[name='registration']").validate({
    rules: {
      first_name: "required",
      last_name: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      first_name: "Please enter your first_name",
      last_name: "Please enter your last_name",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(function() {
    $("form[name='category']").validate({
    // Specify validation rules
    rules: {
      category_name: "required",
      category_description: "required",
    },
    messages: {
      category_name: "Please enter category_name",
      category_description: "Please enter your category_name",
     
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});


$(function() {
    $("form[name='customer']").validate({
    rules: {
      customer_name: "required",
      customer_address: "required",
      customer_phone: "required",
      
    },
    messages: {
      customer_name: "Please enter customer_name",
      customer_address: "Please enter customer_address",
      customer_phone: "Please enter customer_phone",
     
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(function() {
    $("form[name='project']").validate({
    rules: {
      project_name: "required",
      project_number: "required",
      project_customer: "required",
      project_category: "required",
      contract_number: "required",
      contract_date: "required",
      status: "required",
      
    },
    messages: {
      project_name: "Please enter project_name",
      project_number:"Please enter project_number",
      project_customer:"Please enter project_customer",
      project_category: "Please enter project_category",
      contract_number: "Please enter contract_number",
      contract_date: "Please enter contract_date",
      status: "Please select project_status",
     
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});


$(function() {
    $("form[name='contact']").validate({
    rules: {
      contact_name: "required",
      contact_address: "required",
      contact_phone: "required",
      contact_email: "required",
      contact_others: "required",

      
    },
    messages: {
      contact_name: "Please enter contact_name",
      contact_address: "Please enter contact_address",
      contact_phone: "Please enter contact_phone",
      contact_email: "Please enter contact_email",
      contact_others: "Please enter contact_others",
     
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(function() {
    $("form[name='edit_contact']").validate({
    rules: {
      contact_name: "required",
      contact_address: "required",
      contact_phone: "required",
      contact_email: "required",
      contact_others: "required",

      
    },
    messages: {
      contact_name: "Please enter contact_name",
      contact_address: "Please enter contact_address",
      contact_phone: "Please enter contact_phone",
      contact_email: "Please enter contact_email",
      contact_others: "Please enter contact_others",
     
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});


$(function() {
    $("form[name='child']").validate({
    rules: {
      child_category_name: "required",
      child_category_desc: "required",

    },
    messages: {
      contact_name: "Please enter contact_name",
      child_category_name: "Please enter name",
      child_category_desc: "Please enter description",
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(function() {
    $("form[name='edit_child']").validate({
     rules: {
      child_category_name: "required",
      child_category_desc: "required",

    },
    messages: {
      contact_name: "Please enter contact_name",
      child_category_name: "Please enter name",
      child_category_desc: "Please enter description",
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});