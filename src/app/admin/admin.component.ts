import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // exportInventory() {
  //   this.inventoryService.exportInventory().subscribe((data) => {
  //     // Đoạn này giả sử rằng phản hồi là URL của file đã được lưu trữ trong MinIO
  //     const url = window.URL.createObjectURL(data);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'InventoryFile.xlsx'); // đặt tên file muốn download
  //     document.body.appendChild(link);
  //     link.click();
  //     link.remove();
  //   }, error => {
  //     console.error("Có lỗi xảy ra trong quá trình xuất file: ", error);
  //   });
  // }

}
