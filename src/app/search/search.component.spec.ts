import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { SearchComponent } from './search.component'
import { MOCK_DATA_RESPONSE } from '../mockDataResponse.json'
import { DataService } from '../data.service'
import { of } from 'rxjs'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should not search if user does not enter valid input', () => {
    let mockDataService = TestBed.inject(DataService)
    spyOn(mockDataService, 'getData')
    component.search("")
    expect(mockDataService.getData).not.toHaveBeenCalled()
  })

  it('should search based on user input and populate search results', () => {
    let mockDataService = TestBed.inject(DataService)
    let mockDataResponse = MOCK_DATA_RESPONSE
    spyOn(mockDataService, 'getData').and.returnValue(of(mockDataResponse))

    component.search("juice wrld")
    expect(component.searchResults).toBe(MOCK_DATA_RESPONSE)
  })

})
