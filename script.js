// كلمة السر الصحيحة
const correctPassword = "102030";
let loginAttempts = 0;

// التحقق من كلمة السر
function checkPassword() {
    const passwordInput = document.getElementById("password");
    const passwordStatus = document.getElementById("password-status");
    const password = passwordInput.value;
    
    if (password === correctPassword) {
        passwordStatus.textContent = "كلمة المرور صحيحة! جاري الدخول...";
        passwordStatus.style.color = "#00ff00";
        loginAttempts = 0;
        
        // الانتقال إلى شاشة التحميل
        setTimeout(() => {
            document.getElementById("login-screen").style.display = "none";
            document.getElementById("loading-screen").style.display = "block";
            startLoading();
        }, 1000);
    } else {
        loginAttempts++;
        passwordStatus.textContent = `كلمة المرور خاطئة! المحاولة: ${loginAttempts}`;
        passwordInput.value = "";
        
        // تأثير الاهتزاز عند الخطأ
        passwordInput.classList.add('flicker');
        setTimeout(() => {
            passwordInput.classList.remove('flicker');
        }, 500);
    }
}

// بدء تحميل الشاشة الرئيسية
function startLoading() {
    const progressBar = document.getElementById("progress-bar");
    const countdown = document.getElementById("countdown");
    const logs = document.getElementById("loading-logs");
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        countdown.textContent = `جاري التحضير... ${progress}%`;
        
        // إضافة سجلات عشوائية
        if (progress % 5 === 0) {
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");
            
            const messages = [
                "جاري تحميل وحدات النظام...",
                "تهيئة وحدات الاختراق...",
                "الاتصال بالسيرفر الرئيسي...",
                "تفعيل وضع التخفي...",
                "جاري فك التشفير...",
                "تحميل قاعدة البيانات...",
                "جاري تهيئة الواجهة...",
                "تفعيل أدوات الاختراق..."
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${randomMessage}`;
            logs.appendChild(logEntry);
            logs.scrollTop = logs.scrollHeight;
        }
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById("loading-screen").style.display = "none";
                document.getElementById("main-screen").style.display = "block";
            }, 1000);
        }
    }, 50);
}

// اختراق واتساب
function hackWhatsApp() {
    const number = document.getElementById("whatsapp-number").value;
    const resultDiv = document.getElementById("whatsapp-result");
    const logs = document.getElementById("main-logs");
    
    if (!number) {
        resultDiv.innerHTML = "<span class='error'>يجب إدخال رقم الهاتف!</span>";
        return;
    }
    
    resultDiv.innerHTML = "<span class='highlight'>جاري اختراق واتساب...</span>";
    
    // محاكاة عملية الاختراق
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        
        if (progress <= 100) {
            resultDiv.innerHTML = `<span class='highlight'>جاري اختراق واتساب... ${progress}%</span>`;
            
            // إضافة سجلات
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");
            
            const messages = [
                `جاري فك تشفير رسائل الرقم ${number}...`,
                `جاري استخراج الوسائط...`,
                `جاري اختراق الدردشات...`,
                `جاري نسخ قاعدة البيانات...`,
                `جاري تجاوز نظام الحماية...`
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${randomMessage}`;
            logs.appendChild(logEntry);
            logs.scrollTop = logs.scrollHeight;
        }
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                const codes = ["WAC-4782", "WAC-8821", "WAC-1298", "WAC-5567", "WAC-9932"];
                const randomCode = codes[Math.floor(Math.random() * codes.length)];
                resultDiv.innerHTML = `<span class='success'>تم اختراق واتساب بنجاح!<br>كود الدخول: ${randomCode}</span>`;
            }, 1000);
        }
    }, 200);
}

// اختراق تلجرام
function hackTelegram() {
    const username = document.getElementById("telegram-username").value;
    const resultDiv = document.getElementById("telegram-result");
    const logs = document.getElementById("main-logs");
    
    if (!username) {
        resultDiv.innerHTML = "<span class='error'>يجب إدخال اسم المستخدم!</span>";
        return;
    }
    
    resultDiv.innerHTML = "<span class='highlight'>جاري اختراق تلجرام...</span>";
    
    // محاكاة عملية الاختراق
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        
        if (progress <= 100) {
            resultDiv.innerHTML = `<span class='highlight'>جاري اختراق تلجرام... ${progress}%</span>`;
            
            // إضافة سجلات
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");
            
            const messages = [
                `جاري اختراق حساب @${username}...`,
                `جاري كسر تشفير TLS...`,
                `جاري تجاوز المصادقة الثنائية...`,
                `جاري جمع المعلومات الشخصية...`,
                `جاري اختراق الدردشات السرية...`
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${randomMessage}`;
            logs.appendChild(logEntry);
            logs.scrollTop = logs.scrollHeight;
        }
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                // توليد كلمات سر عشوائية
                const passwords = [];
                for (let i = 0; i < 20; i++) {
                    const randomPass = Math.random().toString(36).slice(-8);
                    passwords.push(randomPass);
                }
                
                resultDiv.innerHTML = `<span class='success'>تم اختراق تلجرام بنجاح!<br>كلمات المرور المحتملة:<br>${passwords.join('<br>')}</span>`;
            }, 1000);
        }
    }, 200);
}

// اختراق انستجرام
function hackInstagram() {
    const username = document.getElementById("instagram-username").value;
    const resultDiv = document.getElementById("instagram-result");
    const logs = document.getElementById("main-logs");
    
    if (!username) {
        resultDiv.innerHTML = "<span class='error'>يجب إدخال اسم المستخدم!</span>";
        return;
    }
    
    resultDiv.innerHTML = "<span class='highlight'>جاري اختراق انستجرام...</span>";
    
    // محاكاة عملية الاختراق
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        
        if (progress <= 100) {
            resultDiv.innerHTML = `<span class='highlight'>جاري اختراق انستجرام... ${progress}%</span>`;
            
            // إضافة سجلات
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");
            
            const messages = [
                `جاري اختراق حساب @${username}...`,
                `جاري كسر كلمة المرور...`,
                `جاري تجاوز نظام الحماية...`,
                `جاري جمع الصور الخاصة...`,
                `جاري اختراق الرسائل المباشرة...`
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${randomMessage}`;
            logs.appendChild(logEntry);
            logs.scrollTop = logs.scrollHeight;
        }
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                // توليد كلمات سر عشوائية
                const passwords = [];
                for (let i = 0; i < 20; i++) {
                    const randomPass = Math.random().toString(36).slice(-8);
                    passwords.push(randomPass);
                }
                
                resultDiv.innerHTML = `<span class='success'>تم اختراق انستجرام بنجاح!<br>كلمات المرور المحتملة:<br>${passwords.join('<br>')}</span>`;
            }, 1000);
        }
    }, 200);
}

// الإبلاغ عن مستخدم انستجرام
function reportInstagram() {
    const username = document.getElementById("report-username").value;
    const resultDiv = document.getElementById("report-result");
    const logs = document.getElementById("main-logs");
    
    if (!username) {
        resultDiv.innerHTML = "<span class='error'>يجب إدخال اسم المستخدم!</span>";
        return;
    }
    
    resultDiv.innerHTML = "<span class='highlight'>جاري الإبلاغ عن المستخدم...</span>";
    
    // محاكاة عملية الإبلاغ
    let reports = 0;
    const interval = setInterval(() => {
        reports += 1;
        
        if (reports <= 100) {
            resultDiv.innerHTML = `<span class='highlight'>جاري الإبلاغ عن @${username}... ${reports} بلاغ</span>`;
            
            // إضافة سجلات كل 10 تقارير
            if (reports % 10 === 0) {
                const logEntry = document.createElement("div");
                logEntry.classList.add("log-entry");
                logEntry.textContent = `[${new Date().toLocaleTimeString()}] تم إرسال ${reports} بلاغ لحساب @${username}`;
                logs.appendChild(logEntry);
                logs.scrollTop = logs.scrollHeight;
            }
        }
        
        if (reports === 100) {
            clearInterval(interval);
            setTimeout(() => {
                resultDiv.innerHTML = `<span class='success'>تم الإبلاغ عن @${username} بنجاح!<br>تم إرسال 100 بلاغ إلى انستجرام</span>`;
            }, 1000);
        }
    }, 100);
}

// للسماح بالدخول عند الضغط على Enter في حقل كلمة المرور
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("password").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });
    
    // جعل كلمة السر متحركة (تغيير لون الحدود)
    setInterval(() => {
        const passwordInput = document.getElementById("password");
        if (passwordInput) {
            const hue = Math.floor(Math.random() * 120); // بين 0 و120 (ألوان خضراء)
            passwordInput.style.borderColor = `hsl(${hue}, 100%, 50%)`;
        }
    }, 1000);
});