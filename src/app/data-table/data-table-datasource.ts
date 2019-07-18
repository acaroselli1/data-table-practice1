import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  description: string;
  cost: string;
  quantity: number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  
  { id: 1, name: 'Hydrogen', description: 'description 1', cost: '2.00', quantity: 50 },
  { id: 2, name: 'Helium', description: 'description 2', cost: '2.10', quantity: 60 },
  { id: 3, name: 'Lithium', description: 'description 3', cost: '2.20', quantity: 70 },
  { id: 4, name: 'Beryllium', description: 'description 4', cost: '2.30', quantity: 80 },
  { id: 5, name: 'Boron', description: 'description 5', cost: '2.40', quantity: 90 },
  { id: 6, name: 'Carbon', description: 'description 6', cost: '2.50', quantity: 100 },
  { id: 7, name: 'Nitrogen', description: 'description 7', cost: '2.60', quantity: 110 },
  { id: 8, name: 'Oxygen', description: 'description 8', cost: '2.70', quantity: 120 },
  { id: 9, name: 'Fluorine', description: 'description 9', cost: '2.80', quantity: 130 },
  { id: 10, name: 'Neon', description: 'description 10', cost: '2.90', quantity: 140 },
  { id: 11, name: 'Sodium', description: 'description 11', cost: '3.00', quantity: 150 },
  { id: 12, name: 'Magnesium', description: 'description 12', cost: '3.10', quantity: 160 },
  { id: 13, name: 'Aluminum', description: 'description 13', cost: '3.20', quantity: 170 },
  { id: 14, name: 'Silicon', description: 'description 14', cost: '3.30', quantity: 180 },
  { id: 15, name: 'Phosphorus', description: 'description 15', cost: '3.40', quantity: 190 },
  { id: 16, name: 'Sulfur', description: 'description 16', cost: '3.50', quantity: 200 },
  { id: 17, name: 'Chlorine', description: 'description 17', cost: '3.60', quantity: 210 },
  { id: 18, name: 'Argon', description: 'description 18', cost: '3.70', quantity: 220 },
  { id: 19, name: 'Potassium', description: 'description 19', cost: '3.80', quantity: 230 },
  { id: 20, name: 'Calcium', description: 'description 20', cost: '3.90', quantity: 240 },
  { id: 1, name: 'Hydrogen', description: 'description 1', cost: '2.00', quantity: 50 },
  { id: 2, name: 'Helium', description: 'description 2', cost: '2.10', quantity: 60 },
  { id: 3, name: 'Lithium', description: 'description 3', cost: '2.20', quantity: 70 },
  { id: 4, name: 'Beryllium', description: 'description 4', cost: '2.30', quantity: 80 },
  { id: 5, name: 'Boron', description: 'description 5', cost: '2.40', quantity: 90 },
  { id: 6, name: 'Carbon', description: 'description 6', cost: '2.50', quantity: 100 },
  { id: 7, name: 'Nitrogen', description: 'description 7', cost: '2.60', quantity: 110 },
  { id: 8, name: 'Oxygen', description: 'description 8', cost: '2.70', quantity: 120 },
  { id: 9, name: 'Fluorine', description: 'description 9', cost: '2.80', quantity: 130 },
  { id: 10, name: 'Neon', description: 'description 10', cost: '2.90', quantity: 140 },
  { id: 11, name: 'Sodium', description: 'description 11', cost: '3.00', quantity: 150 },
  { id: 12, name: 'Magnesium', description: 'description 12', cost: '3.10', quantity: 160 },
  { id: 13, name: 'Aluminum', description: 'description 13', cost: '3.20', quantity: 170 },
  { id: 14, name: 'Silicon', description: 'description 14', cost: '3.30', quantity: 180 },
  { id: 15, name: 'Phosphorus', description: 'description 15', cost: '3.40', quantity: 190 },
  { id: 16, name: 'Sulfur', description: 'description 16', cost: '3.50', quantity: 200 },
  { id: 17, name: 'Chlorine', description: 'description 17', cost: '3.60', quantity: 210 },
  { id: 18, name: 'Argon', description: 'description 18', cost: '3.70', quantity: 220 },
  { id: 19, name: 'Potassium', description: 'description 19', cost: '3.80', quantity: 230 },
  { id: 20, name: 'Calcium', description: 'description 20', cost: '3.90', quantity: 240 },
  { id: 1, name: 'Hydrogen', description: 'description 1', cost: '2.00', quantity: 50 },
  { id: 2, name: 'Helium', description: 'description 2', cost: '2.10', quantity: 60 },
  { id: 3, name: 'Lithium', description: 'description 3', cost: '2.20', quantity: 70 },
  { id: 4, name: 'Beryllium', description: 'description 4', cost: '2.30', quantity: 80 },
  { id: 5, name: 'Boron', description: 'description 5', cost: '2.40', quantity: 90 },
  { id: 6, name: 'Carbon', description: 'description 6', cost: '2.50', quantity: 100 },
  { id: 7, name: 'Nitrogen', description: 'description 7', cost: '2.60', quantity: 110 },
  { id: 8, name: 'Oxygen', description: 'description 8', cost: '2.70', quantity: 120 },
  { id: 9, name: 'Fluorine', description: 'description 9', cost: '2.80', quantity: 130 },
  { id: 10, name: 'Neon', description: 'description 10', cost: '2.90', quantity: 140 },
  { id: 11, name: 'Sodium', description: 'description 11', cost: '3.00', quantity: 150 },
  { id: 12, name: 'Magnesium', description: 'description 12', cost: '3.10', quantity: 160 },
  { id: 13, name: 'Aluminum', description: 'description 13', cost: '3.20', quantity: 170 },
  { id: 14, name: 'Silicon', description: 'description 14', cost: '3.30', quantity: 180 },
  { id: 15, name: 'Phosphorus', description: 'description 15', cost: '3.40', quantity: 190 },
  { id: 16, name: 'Sulfur', description: 'description 16', cost: '3.50', quantity: 200 },
  { id: 17, name: 'Chlorine', description: 'description 17', cost: '3.60', quantity: 210 },
  { id: 18, name: 'Argon', description: 'description 18', cost: '3.70', quantity: 220 },
  { id: 19, name: 'Potassium', description: 'description 19', cost: '3.80', quantity: 230 },
  { id: 20, name: 'Calcium', description: 'description 20', cost: '3.90', quantity: 240 },
  { id: 1, name: 'Hydrogen', description: 'description 1', cost: '2.00', quantity: 50 },
  { id: 2, name: 'Helium', description: 'description 2', cost: '2.10', quantity: 60 },
  { id: 3, name: 'Lithium', description: 'description 3', cost: '2.20', quantity: 70 },
  { id: 4, name: 'Beryllium', description: 'description 4', cost: '2.30', quantity: 80 },
  { id: 5, name: 'Boron', description: 'description 5', cost: '2.40', quantity: 90 },
  { id: 6, name: 'Carbon', description: 'description 6', cost: '2.50', quantity: 100 },
  { id: 7, name: 'Nitrogen', description: 'description 7', cost: '2.60', quantity: 110 },
  { id: 8, name: 'Oxygen', description: 'description 8', cost: '2.70', quantity: 120 },
  { id: 9, name: 'Fluorine', description: 'description 9', cost: '2.80', quantity: 130 },
  { id: 10, name: 'Neon', description: 'description 10', cost: '2.90', quantity: 140 },
  { id: 11, name: 'Sodium', description: 'description 11', cost: '3.00', quantity: 150 },
  { id: 12, name: 'Magnesium', description: 'description 12', cost: '3.10', quantity: 160 },
  { id: 13, name: 'Aluminum', description: 'description 13', cost: '3.20', quantity: 170 },
  { id: 14, name: 'Silicon', description: 'description 14', cost: '3.30', quantity: 180 },
  { id: 15, name: 'Phosphorus', description: 'description 15', cost: '3.40', quantity: 190 },
  { id: 16, name: 'Sulfur', description: 'description 16', cost: '3.50', quantity: 200 },
  { id: 17, name: 'Chlorine', description: 'description 17', cost: '3.60', quantity: 210 },
  { id: 18, name: 'Argon', description: 'description 18', cost: '3.70', quantity: 220 },
  { id: 19, name: 'Potassium', description: 'description 19', cost: '3.80', quantity: 230 },
  { id: 20, name: 'Calcium', description: 'description 20', cost: '3.90', quantity: 240 },
  { id: 1, name: 'Hydrogen', description: 'description 1', cost: '2.00', quantity: 50 },
  { id: 2, name: 'Helium', description: 'description 2', cost: '2.10', quantity: 60 },
  { id: 3, name: 'Lithium', description: 'description 3', cost: '2.20', quantity: 70 },
  { id: 4, name: 'Beryllium', description: 'description 4', cost: '2.30', quantity: 80 },
  { id: 5, name: 'Boron', description: 'description 5', cost: '2.40', quantity: 90 },
  { id: 6, name: 'Carbon', description: 'description 6', cost: '2.50', quantity: 100 },
  { id: 7, name: 'Nitrogen', description: 'description 7', cost: '2.60', quantity: 110 },
  { id: 8, name: 'Oxygen', description: 'description 8', cost: '2.70', quantity: 120 },
  { id: 9, name: 'Fluorine', description: 'description 9', cost: '2.80', quantity: 130 },
  { id: 10, name: 'Neon', description: 'description 10', cost: '2.90', quantity: 140 },
  { id: 11, name: 'Sodium', description: 'description 11', cost: '3.00', quantity: 150 },
  { id: 12, name: 'Magnesium', description: 'description 12', cost: '3.10', quantity: 160 },
  { id: 13, name: 'Aluminum', description: 'description 13', cost: '3.20', quantity: 170 },
  { id: 14, name: 'Silicon', description: 'description 14', cost: '3.30', quantity: 180 },
  { id: 15, name: 'Phosphorus', description: 'description 15', cost: '3.40', quantity: 190 },
  { id: 16, name: 'Sulfur', description: 'description 16', cost: '3.50', quantity: 200 },
  { id: 17, name: 'Chlorine', description: 'description 17', cost: '3.60', quantity: 210 },
  { id: 18, name: 'Argon', description: 'description 18', cost: '3.70', quantity: 220 },
  { id: 19, name: 'Potassium', description: 'description 19', cost: '3.80', quantity: 230 },
  { id: 20, name: 'Calcium', description: 'description 20', cost: '3.90', quantity: 240 },
  { id: 1, name: 'Hydrogen', description: 'description 1', cost: '2.00', quantity: 50 },
  { id: 2, name: 'Helium', description: 'description 2', cost: '2.10', quantity: 60 },
  { id: 3, name: 'Lithium', description: 'description 3', cost: '2.20', quantity: 70 },
  { id: 4, name: 'Beryllium', description: 'description 4', cost: '2.30', quantity: 80 },
  { id: 5, name: 'Boron', description: 'description 5', cost: '2.40', quantity: 90 },
  { id: 6, name: 'Carbon', description: 'description 6', cost: '2.50', quantity: 100 },
  { id: 7, name: 'Nitrogen', description: 'description 7', cost: '2.60', quantity: 110 },
  { id: 8, name: 'Oxygen', description: 'description 8', cost: '2.70', quantity: 120 },
  { id: 9, name: 'Fluorine', description: 'description 9', cost: '2.80', quantity: 130 },
  { id: 10, name: 'Neon', description: 'description 10', cost: '2.90', quantity: 140 },
  { id: 11, name: 'Sodium', description: 'description 11', cost: '3.00', quantity: 150 },
  { id: 12, name: 'Magnesium', description: 'description 12', cost: '3.10', quantity: 160 },
  { id: 13, name: 'Aluminum', description: 'description 13', cost: '3.20', quantity: 170 },
  { id: 14, name: 'Silicon', description: 'description 14', cost: '3.30', quantity: 180 },
  { id: 15, name: 'Phosphorus', description: 'description 15', cost: '3.40', quantity: 190 },
  { id: 16, name: 'Sulfur', description: 'description 16', cost: '3.50', quantity: 200 },
  { id: 17, name: 'Chlorine', description: 'description 17', cost: '3.60', quantity: 210 },
  { id: 18, name: 'Argon', description: 'description 18', cost: '3.70', quantity: 220 },
  { id: 19, name: 'Potassium', description: 'description 19', cost: '3.80', quantity: 230 },
  { id: 20, name: 'Calcium', description: 'description 20', cost: '3.90', quantity: 240 },
 ];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'cost': return compare(+a.cost, +b.cost, isAsc);
        case 'quantity': return compare(+a.quantity, +b.quantity, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
