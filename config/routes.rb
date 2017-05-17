Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'sessions#new'
  get 'students/new' => 'students#new'
  get 'getStudent' => 'students#getStudent'
  get 'addStudent' => 'students#create_student'
  delete 'delete_student' => 'students#destroy_student'
  get 'get_forms'=>'students#get_students_forms'
  delete 'destroy_forms'=>'form#destroy_forms'
  get 'add_to_class' =>'student_form#create'
  get 'get_class_users'=>'student_form#get_class_users'
  delete 'delete_from_class'=>'student_form#destroy_student_from_class'
  get 'create_class' => 'form#create_class'


  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  get '/langs',      to: 'languages#change'


  get  'registrationPage' =>'students#new'
  post 'registrationPage' =>'students#registration'



end

