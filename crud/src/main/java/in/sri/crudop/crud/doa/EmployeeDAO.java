package in.sri.crudop.crud.doa;


import java.util.List;


import in.sri.crudop.crud.model.Employee;

public interface EmployeeDAO {
	List<Employee> get();
	
    Employee get(int id);
	
	void save(Employee employee);
	
	void delete(int id); 
	
	

}
