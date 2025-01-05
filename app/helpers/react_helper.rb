module ReactHelper
  def react_component(name, props = {})
    entrypoint_file_name = "#{name.underscore}.tsx"

    safe_join([
      content_tag(:div, nil, data: { component: name, props: props.to_json }),
      vite_typescript_tag(entrypoint_file_name)
    ])
  end
end
