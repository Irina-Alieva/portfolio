$(document).ready(function() {

		
$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});


$('#portfolio-projects ').mixItUp();

// FancyBox 

$(".fancybox").fancybox({
			    helpers: {
                overlay: {
                    locked: false
                }
            }
    });
// EndFancyBox

//   Form Validation
$("#contact-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			// phone:  { required: true },
			message: { required: true }
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},

		submitHandler: function(form) {
		  ajaxFormSubmit();
		}

	})

	// function ajax request
	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		//   init ajax request
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// if success
			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}



	});

	return false; 
	}




	
});