import sys
from PyQt5.QtWidgets import *
from PyQt5 import uic

# UI파일 연결
# 단, UI파일은 Python 코드 파일과 같은 디렉토리에 위치해야한다.
form_class = uic.loadUiType("todolist.ui")[0]


# 화면을 띄우는데 사용되는 Class 선언
class WindowClass(QMainWindow, form_class):
    def __init__(self):
        super().__init__()
        self.setupUi(self)

        self.pushButton.clicked.connect(self.handleClick1)
        self.pushButton2.clicked.connect(self.handleClick2)
        self.changeButton.clicked.connect(self.handleReturn)
        self.lineEdit.returnPressed.connect(self.handleReturn)

    def handleClick1(self):
        print('헛소리 하지마')

    def handleClick2(self):
        num = int(self.label_2.text())
        self.label_2.setText(str(num+1))

    def handleReturn(self):
        comment = self.lineEdit.text();
        self.label.setText(comment)

styleSheet = """
    WindowClass {
        border-image: url('/Users/eumericano/Documents/tutor/tutor_04/pyQt5/todoList/images.jpeg')
    }
"""

if __name__ == "__main__":
    # QApplication : 프로그램을 실행시켜주는 클래스
    app = QApplication(sys.argv)
    app.setStyleSheet(styleSheet)
    # WindowClass의 인스턴스 생성
    myWindow = WindowClass()

    # 프로그램 화면을 보여주는 코드
    myWindow.show()

    # 프로그램을 이벤트루프로 진입시키는(프로그램을 작동시키는) 코드
    app.exec_()
