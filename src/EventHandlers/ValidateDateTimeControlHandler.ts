import { MessageBox } from "@docsvision/webclient/Helpers/MessageBox/MessageBox";
import { DateTimePicker } from "@docsvision/webclient/Platform/DateTimePicker";
import { CancelableEventArgs } from "@docsvision/webclient/System/CancelableEventArgs";
import { ICardSavingEventArgs } from "@docsvision/webclient/System/ICardSavingEventArgs";
import { Layout } from "@docsvision/webclient/System/Layout";


export function validateDateTimeControl(typeCtrl: DateTimePicker, args: CancelableEventArgs<ICardSavingEventArgs>) {

  const layout = typeCtrl.layout;


  let dateTimePicker1 = layout.controls.tryGet<DateTimePicker>("beginDate");
  let dateTimePicker2 = layout.controls.tryGet<DateTimePicker>("endDate2");

  if (!dateTimePicker1 || !dateTimePicker2) {
    MessageBox.ShowWarning("Не задана одна из дат командировки");
    args.cancel;
  }

  
  
  if (dateTimePicker1.params.value>dateTimePicker2.params.value) {
        MessageBox.ShowWarning("Дата начала командировки не может быть больше даты конца командировки");
        args.cancel;
    }
}