$(document).ready(function() {
	$('#contactme')
        .bootstrapValidator({
            fields: {
				name: {
					message: 'Your name is not valid',
					validators: {
						notEmpty: {
							message: 'Your name is required and cannot be empty'
						},
						stringLength: {
							min: 6,
							max: 30,
							message: 'Your name must be more than 6 and less than 30 characters long'
						},
						regexp: {
							regexp: /^[a-zA-Z0-9 ]+$/,
							message: 'Your name can only consist of alphabetical and number'
						}
					}
				},
				email: {
					validators: {
						notEmpty: {
							message: 'Your email address is required and cannot be empty'
						},
						emailAddress: {
							message: 'Your email address is not a valid'
						}
					}
				},
				subject: {
					message: 'The subject is not valid',
					validators: {
						notEmpty: {
							message: 'The subject is required and cannot be empty'
						},
						stringLength: {
							min: 1,
							max: 50,
							message: 'The subject must be more than 1 and less than 50 characters long'
						},
						regexp: {
							regexp: /^[a-zA-Z0-9 ]+$/,
							message: 'The subject can only consist of alphabetical and number'
						}
					}
				},
				content: {
					message: 'The comments are required',
					validators: {
						notEmpty: {
							message: 'The comments are required and cannot be empty'
						},
						stringLength: {
							min: 1,
							max: 500,
							message: 'The comments must be more than 1 and less than 500 characters long'
						},
						regexp: {
							regexp: /^[a-zA-Z0-9 ]+$/,
							message: 'The comments can only consist of alphabetical and number'
						}
					}
				}
			}
        })
        .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            var $form = $(e.target),
				bv = $form.data('bootstrapValidator');

			var data = {
				'key': 'lpgQjG8uZMKoE-5vGivBoQ',
				'message': {
				  'from_email': $('#email').val(),
				  'from_name':  $('#name').val(),
				  'to': [
					  {
						'email': 'djhv92@hotmail.com',
						'name': 'Dennis Hernández',
						'type': 'to'
					  }
					],
				  'autotext': 'true',
				  'subject': $('#subject').val(),
				  'html':  $('#content').val() + ' *sent it from my web site*'
				}
			  };
			  
            $.post($form.attr('action'), data, null, 'json').done(function() {
						noty({text: 'You email has been sent!', layout: 'topLeft', type:'information', timeout: 4000});
						resetForm(true);
				  })
				  .fail(function() {
						noty({text: 'You email has not been sent, an error ocurred while sending. Try again!!', layout: 'topRight', type:'error', timeout: 5000});
						resetForm(false);
				  });
        }).on('status.field.bv', function(e, data) {
			data.bv.disableSubmitButtons(false);
        });
});

var resetForm = function(needReset) {
	if(needReset) {
		$('#contactme').trigger("reset");
	}
	$('#contactme :input').each(function() {
		if(this.type !== 'submit' && this.type !== 'button' && this.type !== 'textarea') {
			$('#contactme').bootstrapValidator('enableFieldValidators', this.name, false).bootstrapValidator('enableFieldValidators', this.name, true)
		}
	});
	
	$('#submitcontactme').prop("disabled", false);
};


