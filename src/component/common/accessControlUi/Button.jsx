/* eslint-disable max-len */
import usePermissions from "hooks/usePermission";
import PropTypes from "prop-types";
import { BiImport } from "react-icons/bi";
import { FiEdit3, FiEye, FiTrash } from "react-icons/fi";
import { RiPlayListAddLine } from "react-icons/ri";

const accessKeys = {
  view: "view",
  viewAll: "viewAll",
  create: "create",
  update: "update",
  delete: "delete",
};

const AccessController = ({
  render,
  currentResource,
  requestAcessKeys,
  ...buttonProps
}) => {
  const { userPermission } = usePermissions();

  const hasPermission = requestAcessKeys?.some(
    (key) => userPermission?.[currentResource]?.[key]
  );

  if (hasPermission) {
    return render(buttonProps);
  }

  return null;
};

AccessController.propTypes = {
  render: PropTypes.func.isRequired,
  currentResource: PropTypes.string.isRequired,
  userPermission: PropTypes.object.isRequired,
  requestAcessKeys: PropTypes.array,
};

export const AddButton = ({
  id,
  title,
  addButtonClass = "h-[3.063rem] lg:w-[7.625rem] p-2 border-[1.5px] md:w-[4rem] md:text-smborder-[#E2E8F0] text-[#031B59] rounded-full flex justify-center items-center",
  currentResource,
  onClick,
}) => {
  return (
    <AccessController
      currentResource={currentResource}
      requestAcessKeys={[accessKeys.create]}
      render={(buttonProps) => (
        <button
          id={id}
          className={`${addButtonClass}`}
          onClick={onClick}
          {...buttonProps}
        >
          {title}
        </button>
      )}
    />
  );
};

AddButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  currentResource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  addButtonClass: PropTypes.string,
};

export const ColumnButton = ({ title, onToggle, currentResource }) => {
  return (
    <AccessController
      currentResource={currentResource}
      requestAcessKeys={[accessKeys.viewAll]}
      render={(buttonProps) => (
        <button
          data-testid="filter-button"
          className="w-[2.688rem] h-[2.688rem] relative flex items-center
          justify-center border-[1.5px] border-[#E2E8F0] rounded-full"
          onClick={onToggle}
          {...buttonProps}
        >
          <RiPlayListAddLine
            className="w-6 h-6 stroke-[#031B59]"
            title={title}
          />
        </button>
      )}
    />
  );
};

ColumnButton.propTypes = {
  title: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  currentResource: PropTypes.string.isRequired,
};

export const EditButton = ({ currentResource, onClick }) => {
  return (
    <AccessController
      currentResource={currentResource}
      requestAcessKeys={[accessKeys.update]}
      render={(buttonProps) => (
        <FiEdit3
          className="cursor-pointer w-full h-4 flex items-center justify-start disable-btn relative group"
          onClick={onClick}
          {...buttonProps}
        />
      )}
    />
  );
};

EditButton.propTypes = {
  currentResource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const ViewButton = ({ currentResource, onClick }) => {
  return (
    <AccessController
      currentResource={currentResource}
      requestAcessKeys={[accessKeys.view]}
      render={(buttonProps) => (
        <FiEye
          className="cursor-pointer w-full h-5 flex items-center justify-start disable-btn relative group"
          onClick={onClick}
          {...buttonProps}
        />
      )}
    />
  );
};

ViewButton.propTypes = {
  currentResource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const DeleteButton = ({ currentResource, onClick }) => {
  return (
    <AccessController
      currentResource={currentResource}
      requestAcessKeys={[accessKeys.delete]}
      render={(buttonProps) => (
        <FiTrash
          className="cursor-pointer w-full h-5 flex items-center justify-start disable-btn relative group"
          onClick={onClick}
          {...buttonProps}
        />
      )}
    />
  );
};

DeleteButton.propTypes = {
  currentResource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const ImportButton = ({ id, title, currentResource, onClick }) => {
  return (
    <AccessController
      currentResource={currentResource}
      requestAcessKeys={[accessKeys.create]}
      render={(buttonProps) => (
        <button
          className="w-[2.688rem] h-[2.688rem] relative flex items-center justify-center
        border-[1.5px] border-[#E2E8F0] rounded-full hover:bg-[#031B59] hover:text-[#E2E8F0]
        group"
        >
          <BiImport
            id={id}
            title={title}
            className="w-6 h-6"
            onClick={onClick}
            {...buttonProps}
          />
        </button>
      )}
    />
  );
};

ImportButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  currentResource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
