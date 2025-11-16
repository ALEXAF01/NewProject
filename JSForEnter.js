document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Останавливаем отправку

    // Получаем поля
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Блок для ошибок
    let errorDiv = document.getElementById('registrationError');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'registrationError';
        errorDiv.style.color = 'red';
        errorDiv.style.margin = '10px 0';
        errorDiv.style.fontSize = '14px';
        // Вставляем после формы
        document.querySelector('.registration-menu').insertBefore(errorDiv, document.querySelector('p'));
    }
    errorDiv.textContent = ''; // Очищаем предыдущие ошибки

    // 1. Проверка имени: только буквы (латиница и кириллица)
    const usernameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (!username) {
        errorDiv.textContent = 'Введите имя пользователя.';
        return;
    }
    if (!usernameRegex.test(username)) {
        errorDiv.textContent = 'Имя пользователя может содержать только буквы (A-Z, А-Я), без цифр и символов.';
        return;
    }

    // 2. Проверка email: только буквы, цифры, @ и .
    const emailRegex = /^[a-zA-Zа-яА-Я0-9@.]+$/;
    if (!email) {
        errorDiv.textContent = 'Введите email.';
        return;
    }
    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Email может содержать только буквы, цифры, символы @ и .';
        return;
    }
    if ((email.match(/@/g) || []).length !== 1) {
        errorDiv.textContent = 'Email должен содержать ровно один символ @.';
        return;
    }
    if (!email.includes('.')) {
        errorDiv.textContent = 'Email должен содержать хотя бы одну точку (.).';
        return;
    }

    // 3. Проверка паролей
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Пароли не совпадают.';
        return;
    }
    if (password.length < 6) {
        errorDiv.textContent = 'Пароль должен быть не менее 6 символов.';
        return;
    }

    // ✅ Если всё хорошо
    errorDiv.textContent = '';
    errorDiv.style.color = 'green';
    errorDiv.textContent = 'Форма валидна! Регистрация...';
    setTimeout(() => {
    alert('Регистрация успешна!');
    document.getElementById('registrationForm').reset();
    document.getElementById('registrationError').textContent = '';
}, 500);
})