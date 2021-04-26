let form_1 = document.getElementById('form');

form_1.addEventListener("submit", work);

function work() {
    event.preventDefault();
    var name = form_1.elements.name.value;
    var street = form_1.elements.street.value;
    var housing = form_1.elements.housing.value;
    var phone = form_1.elements.phone.value;
    var home = form_1.elements.home.value;
    var homenumber = form_1.elements.homenumber.value;
    var floor = form_1.elements.floor.value;
    var porch = form_1.elements.porch.value;
    var comment = form_1.elements.comment.value;
    if (name.length == 0 && street.length == 0 && housing.length == 0 && phone.length == 0 &&
        home.length == 0 && homenumber.length == 0 && floor.length == 0 && porch.length == 0) {
        Swal.fire('Заполните данные!', 'Ошибка', 'error');
        return;
    }
    if (name.length == 0) {
        Swal.fire('Введите ФИО', 'Проверьте введенные данные', 'error');
        return;
    }
    if (name.length < 5) {
        Swal.fire('ФИО слишком короткое', 'Проверьте введенное ФИО', 'warning');
        return;
    }
    if (street.length == 0) {
        Swal.fire('Введите улицу', 'Проверьте введенные данные об улице', 'error');
        return;
    }
    if (housing.length == 0) {
        Swal.fire('Введите корпус', 'Проверьте введенные данные об корпусе', 'error');
        return;
    }
    if (phone.length == 0) {
        Swal.fire('Введите номер телефона', 'Проверьте введенный номер телефона', 'error');
        return;
    }
    if (phone.length < 6) {
        Swal.fire('Номер слишком короткий', 'Проверьте номер телефона ещё раз и повторите попытку', 'error');
        return;
    }
    if (home.length == 0) {
        Swal.fire('Введите номер дома', 'Проверьте введенный номер дома', 'error');
        return;
    }
    if (homenumber.length == 0) {
        Swal.fire('Введите номер квартиры', 'Проверьте введенный номер квартиры', 'error');
        return;
    }
    if (floor.length == 0) {
        Swal.fire('Введите номер этажа', 'Проверьте введенный номер этажа', 'error');
        return;
    }
    if (porch.length == 0) {
        Swal.fire('Введите номер подъезда', 'Проверьте введенный номер подъезда', 'error');
        return;
    }
    Swal.fire('Поздравляем!', 'Заказ оформлен.', 'success');
};