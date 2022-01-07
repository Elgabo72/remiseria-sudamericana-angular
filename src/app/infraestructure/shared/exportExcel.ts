import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

export const exportExcel = (dataArray: any[], nameFile: string) => {

    try {
        let arraysName = Array.from(Object.keys(dataArray[0]));
        //  capitalize names Header
        let capitalizeNames = arraysName.map(name => {
            return name.charAt(0).toUpperCase() + name.slice(1);
        });

        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet("Employee Data");
        let header = capitalizeNames;
        let headerRow = worksheet.addRow(header);

        for (let x1 of dataArray) {
            let x2 = Object.keys(x1);
            let temp = []
            for (let y of x2) {
                temp.push(x1[y])
            }
            worksheet.addRow(temp)
        }

        //add data and file name and download
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, nameFile + '-' + new Date().valueOf() + '.xlsx');
        });
    } catch (error) {
        console.error(error);

    }
}