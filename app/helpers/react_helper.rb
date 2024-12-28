module ReactHelper
  def react_component(name, props = {})
    content_tag(:div, nil, data: { component: name, props: props.to_json })
  end
end
