import { QMainWindow, QPushButton } from "@nodegui/nodegui";

const win = new QMainWindow();

const button = new QPushButton(win);

button.setText("Hello");

button.addEventListener("clicked", () => {
  button.setText(`🤘 ${new Date().getMilliseconds()}`);
});

win.show();
(global as any).win = win; // To prevent win from being garbage collected.
