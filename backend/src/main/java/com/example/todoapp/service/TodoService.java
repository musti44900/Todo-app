package com.example.todoapp.service;

import com.example.todoapp.entity.Todo;
import com.example.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository repository;

    public List<Todo> getAll() { return repository.findAll(); }
    public Todo create(Todo todo) { return repository.save(todo); }
    public void delete(Long id) { repository.deleteById(id); }
}
