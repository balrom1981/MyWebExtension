define(['@docsvision/webclient/Helpers/MessageBox/MessageBox', '@docsvision/webclient/System/$MessageBox', '@docsvision/webclient/System/ExtensionManager'], (function (MessageBox, $MessageBox, ExtensionManager) { 'use strict';

    function validateTextBoxControl(sender, args) {
        var textBox = sender.controls.textBox1;
        var controlText = textBox.params.value;
        if (!controlText || controlText.length === 0) {
            MessageBox.MessageBox.ShowWarning('Текст контрола пуст');
            args.cancel();
        }
    }

    var ValidateTextControlHandler = /*#__PURE__*/Object.freeze({
        __proto__: null,
        validateTextBoxControl: validateTextBoxControl
    });

    function validateDateTimeControl(typeCtrl) {
        var layout = typeCtrl.layout;
        var dateTimePicker1 = layout.controls.tryGet("beginDate");
        var dateTimePicker2 = layout.controls.tryGet("endDate2");
        if (dateTimePicker1.params.value > dateTimePicker2.params.value) {
            MessageBox.MessageBox.ShowWarning("Дата начала командировки не может быть больше даты конца командировки");
        }
    }

    var ValidateDateTimeControlHandler = /*#__PURE__*/Object.freeze({
        __proto__: null,
        validateDateTimeControl: validateDateTimeControl
    });

    function showInformationAboutCard(typeCtrl) {
        var layout = typeCtrl.layout;
        var messageBoxSvc = layout.getService($MessageBox.$MessageBox);
        var nameOfCard = layout.controls.tryGet("documentName1").params.value;
        var dateTimePicker1 = layout.controls.tryGet("regDate1").params.value;
        var dateTimePicker2 = layout.controls.tryGet("beginDate").params.value;
        var dateTimePicker3 = layout.controls.tryGet("endDate2").params.value;
        var description = layout.controls.tryGet("textBox1").params.value;
        var city = layout.controls.tryGet("Cities").params.value.name;
        messageBoxSvc.showInfo('Название карточки -' + nameOfCard + '\nДата создания - ' + dateTimePicker1 + '\nДата с - ' + dateTimePicker2 +
            '\nДата по - ' + dateTimePicker3 + '\nОснование для поездки - ' + description + '\nГород - ' + city);
    }

    var ShowInformationAboutCardHandler = /*#__PURE__*/Object.freeze({
        __proto__: null,
        showInformationAboutCard: showInformationAboutCard
    });

    // Главная входная точка всего расширения
    // Данный файл должен импортировать прямо или косвенно все остальные файлы, 
    // чтобы rollup смог собрать их все в один бандл.
    // Регистрация расширения позволяет корректно установить все
    // обработчики событий, сервисы и прочие сущности web-приложения.
    ExtensionManager.extensionManager.registerExtension({
        name: "MyWebExtension",
        version: "1.0",
        globalEventHandlers: [
            ValidateTextControlHandler,
            ValidateDateTimeControlHandler,
            ShowInformationAboutCardHandler
        ],
        layoutServices: [],
        controls: []
    });

}));
//# sourceMappingURL=extension.js.map
