import { MessageBox } from "@docsvision/webclient/Helpers/MessageBox/MessageBox";
import { DateTimePicker } from "@docsvision/webclient/Platform/DateTimePicker";
import { Layout } from "@docsvision/webclient/System/Layout";
import { TextBox } from "@docsvision/webclient/Platform/TextBox";
import { $MessageBox } from "@docsvision/webclient/System/$MessageBox";
import { CustomButton } from "@docsvision/webclient/Platform/CustomButton";


export function showInformationAboutCard(typeCtrl: CustomButton) {

  const layout = typeCtrl.layout;
  const messageBoxSvc = layout.getService($MessageBox);


  let nameOfCard = layout.controls.tryGet<TextBox>("documentName1").params.value;
  let dateTimePicker1 = layout.controls.tryGet<DateTimePicker>("regDate1").params.value;
  let dateTimePicker2 = layout.controls.tryGet<DateTimePicker>("beginDate").params.value;
  let dateTimePicker3 = layout.controls.tryGet<DateTimePicker>("endDate2").params.value;
  let description = layout.controls.tryGet<TextBox>("textBox1").params.value;

  messageBoxSvc.showInfo('Название карточки -'+nameOfCard+'\nДата создания - /'+dateTimePicker1+'\nДата с - '+dateTimePicker2 +
    '\nДата по - '+dateTimePicker3+'\nОснование для поездки - '+description);

  
}