package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDto;
import br.edu.utfpr.pb.pw25s.server.dto.OrderProductDto;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderProduct;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.IOrderProductService;
import br.edu.utfpr.pb.pw25s.server.service.IOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("orders-products")
public class OrderProductController extends CrudController<OrderProduct, OrderProductDto, Long>{

    private final IOrderProductService service;
    private final ModelMapper modelMapper;

    public OrderProductController(IOrderProductService service, ModelMapper modelMapper) {
        super(OrderProduct.class, OrderProductDto.class);
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<OrderProduct, Long> getService() {
        return service;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return modelMapper;
    }
}
//
//    private final ICategoryService categoryService;
//
//    public CategoryController(ICategoryService categoryService) {
//        this.categoryService = categoryService;
//    }
//
//    @PostMapping
//    public ResponseEntity<Category> create(
//            @RequestBody @Valid Category category) {
//        categoryService.save(category);
//        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
//                .path("/{id}")
//                .buildAndExpand(category.getId()).toUri();
//        return ResponseEntity.created( location ).body(category);
//    }
//
//    // http://localhost:8025/categories/1
//    @GetMapping("{id}")
//    public ResponseEntity<?> findOne(@PathVariable Long id) {
//        Category category = categoryService.findOne(id);
//        if (category != null) {
//            return ResponseEntity.ok(category);
//        } else {
//            return ResponseEntity.noContent().build();
//        }
//    }
//
//    // http://localhost:8025/categories
//    @GetMapping
//    public ResponseEntity<List<Category>> findAll() {
//        return ResponseEntity.ok(categoryService.findAll());
//    }
//
//    @DeleteMapping("{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void delete(@PathVariable Long id) {
//        categoryService.delete(id);
//    }
//
//}
