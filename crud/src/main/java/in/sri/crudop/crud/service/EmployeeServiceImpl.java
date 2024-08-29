package in.sri.crudop.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.sri.crudop.crud.doa.EmployeeDAO;
import in.sri.crudop.crud.model.Employee;


@Service
public class EmployeeServiceImpl implements EmployeeService 
{

	@Autowired
	private EmployeeDAO employeeDAO; 
	
	
	@Transactional
	@Override
	public List<Employee> get() {
		return employeeDAO.get();
	}

	@Transactional
	@Override
	public Employee get(int id) {
		return employeeDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Employee employee) {
		employeeDAO.save(employee);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		employeeDAO.delete(id);
		
	}

}
