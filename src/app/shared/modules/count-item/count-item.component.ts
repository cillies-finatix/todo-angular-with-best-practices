import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-count-item',
  templateUrl: './count-item.component.html',
  styleUrls: ['./count-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountItemComponent implements OnInit {
  @Input() count?: number | null;

  constructor() {}

  ngOnInit(): void {}
}
