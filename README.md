# estarlincito.com-ui

This repository contains a shared set of UI components and design patterns used across all projects of [estarlincito.com](https://estarlincito.com). These components are designed to be reusable and customizable for easy integration into various projects, ensuring a consistent and unified design system.

## Getting Started

To use the shared UI components in your project, you can add this repository as a Git submodule.

### Adding to Your Project

1. Navigate to the root directory of your project.

2. Run the following command to add the `estarlincito.com-ui` as a submodule:

   ```bash
   git submodule add https://github.com/estarlincito/estarlincito.com-ui.git path/to/your/directory
   ```

   Replace `path/to/your/directory` with the path where you want to store the UI components in your project.

3. After adding the submodule, commit the changes to your project:

   ```bash
   git add .
   git commit -m "Added estarlincito.com-ui as a submodule"
   git push
   ```

4. If you need to update the submodule in the future, run the following command:

   ```bash
   git submodule update --remote
   ```

### Customizing the UI

You can easily customize the components within your own projects. Feel free to override the default styles, modify component props, or adjust layouts to suit the specific needs of each project.

## Components

- **Breadcrumb**
- **SubTitle**
- **Summary**
- **Text**
- **Title**
- **Button**

### Layouts

- **Form**
- **Wrapper**
<!-- - **Contact Form** -->

### Pages

- **Contact Page**
- **Error Page**
- **Not Found Page**

## Contributing

Contributions are welcome! If you want to add new components, fix bugs, or improve the documentation, please feel free to open an issue or a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
