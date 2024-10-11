document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // لمنع إعادة تحميل الصفحة  
    
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
    
    // هنا يمكنك إضافة الكود للتحقق من اسم المستخدم وكلمة المرور  
    // في هذا المثال، سأستخدم قيم بسيطة للمقارنة  
    
    if (username === 'admin' && password === '1234') {  
        document.getElementById('message').innerText = 'تسجيل الدخول بنجاح!';  
        document.getElementById('message').style.color = 'green';  
    } else {  
        document.getElementById('message').innerText = 'اسم المستخدم أو كلمة المرور خاطئة.';  
    }  
});